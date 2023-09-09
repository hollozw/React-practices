import { makeObservable, observable, action } from "mobx";

class Store {
  @observable count = 0;
  @observable price = 0;
  @observable amount = 1;
  @action add(): void {
    // console.log("触发add", this.count);
    this.count += 1;
  }

  // 使用get set的方法，会自动被标记为coputed
  // get total() {
  //   console.log("coputed render", this.price, this.count);
  //   return this.price + this.count;
  // }
}

class User {
  name: string = "小张";
  constructor() {
    makeObservable(this, {
      name: observable,
    });
  }
}

const RootStore = {
  store: new Store(),
  user: new User(),
};

export { RootStore };
