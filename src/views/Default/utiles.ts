function pick<T extends object, U extends keyof T>(obj: T, props: Array<U>): object {
	return {};
}

pick({ a: 1, b: 2 }, ['a', 'b']);

function promise<T>(data: T): Promise<T> {
	return new Promise((result, reject) => {
		setTimeout(() => {
			result(data);
		}, 1000);
	});
}

promise('susses');

/**
 * 类型兼容判断
 */
// 结构化系统
class Cat {
	eat() {}
}
class Dog {
	eat() {}
	bark() {}
}

function feedCat(Cat: Cat) {}

feedCat(new Dog()); // 虽然名称不同，但是结构相同
// 标称类型系统: 类的重要意义是限制了数据的可用操作与实现意义，所以往往该系统是通过附带额外信息来实现(类似于元数据)

declare class TagProtector<T extends string> {
	protected _tag_: T;
}

type Nominal<T, U extends string> = T & TagProtector<U>;

type USD = Nominal<number, 'USD'>;
type CNY = Nominal<number, 'CNY'>;

const CNYCount = 200 as CNY;
const USDCount = 200 as USD;

function addCNY(source: CNY, input: CNY): number {
	return source + input;
}
// @ts-ignore
addCNY(CNYCount, USDCount); //类型“USD”的参数不能赋给类型“CNY”的参数。 不能将类型“USD”分配给类型“TagProtector<"CNY">”。 属性“_tag_”的类型不兼容。 不能将类型“"USD"”分配给类型“"CNY"”。

declare const tag: unique symbol;

declare type Tagged<Token> = {
	readonly [tag]: Token;
};

export type Opaque<Type, Token = unknown> = Type & Tagged<Token>;

/**
 * 内置工具类型
 */

// 属性修饰工具类型：使用属性修饰，映射类型，索引类型相关
type Partial<T> = {
	[P in keyof T]?: T[P];
};
// Partial中的?为标记属性，即为可选

type Required<T> = {
	[P in keyof T]-?: T[P];
};
// Required相当于在原本属性上如果有?这个标记，则移除它

type Readonly<T> = {
	readonly [P in keyof T]: T[P];
};

// 结构工具类型
type Record<K extends keyof any, T> = {
	[P in K]: T;
};
