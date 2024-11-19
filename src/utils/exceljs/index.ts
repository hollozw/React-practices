import ExcelJS from 'exceljs'

type TDataSource<T = any> = {
	head: string[]
	title: string
	data: T[][]
}

class Excel<T> {
	public workbook: ExcelJS.Workbook
	private addWorkSheet: ExcelJS.Worksheet
	public dataSource: TDataSource<T>
	constructor(
		dataSource: TDataSource<T>,
		options?: Partial<ExcelJS.AddWorksheetOptions>
	) {
		const { title, head, data } = dataSource
		this.workbook = new ExcelJS.Workbook()
		this.dataSource = dataSource
		this.addWorkSheet = this.workbook.addWorksheet(title, options)
		this.addRow(head, data)
	}

	public async downLoadExcel(fileName: string) {
		try {
			const workbook = this.workbook
			const buffer = await workbook.xlsx.writeBuffer()
			this.openUrl(buffer, fileName)
		} catch (error) {
			console.error('导出失败')
		}
	}

	public openUrl(buffer: ExcelJS.Buffer, fileName: string) {
		const downloadElement = document.createElement('a')
		const blob = new Blob([buffer])
		const href = window.URL.createObjectURL(blob) //创建下载的链接
		downloadElement.href = href
		downloadElement.download = fileName ?? '未命名' + '.xlsx'
		document.body.appendChild(downloadElement)
		downloadElement.click()
		document.body.removeChild(downloadElement)
		window.URL.revokeObjectURL(href)
	}

	public checkColumn(head: string[], data: T[][]) {
		const errorList = [
			() => {
				if (head.length !== data[0].length) {
					throw new Error('表头和数据长度不一致')
				}
			},
			() => {
				if (head.length === 0) {
					throw new Error('表头不能为空')
				}
			},
		]

		errorList.forEach((item) => {
			item()
		})
	}

	private addRow(head: string[], data: T[][]) {
		this.checkColumn(head, data)
		const addWorkSheet = this.addWorkSheet
		addWorkSheet.addRows(head)
		data.forEach((item) => {
			addWorkSheet.addRow(item)
		})
	}

	public excelOptionFun(
		cb: (addWorkSheet: ExcelJS.Worksheet, dataSource: TDataSource<T>) => void
	) {
		cb(this.addWorkSheet, this.dataSource)
	}
}

export default Excel
