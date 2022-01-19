class API {

  public constructor() {}

  public static http = async function(method: string, url: string, params: any) {
    return 111
  }
}
class STAFF_API extends API {
  constructor() {
    super()
    STAFF_API.getList()
  }
  static getList() {
    return function (params: any) {
      this.url = '/api/employeeInfo/getEmpList'
      return API.http('post', this.url, params);
    }
  }
}
