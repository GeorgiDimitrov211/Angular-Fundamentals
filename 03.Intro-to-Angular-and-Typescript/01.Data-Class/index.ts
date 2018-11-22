(function () {
  class Requestt {
  
    method;
    url;
    version;
    message;
    response;
    fulfilled;
  
    constructor (method: string, url: string, version: string, message: string, response?: string, fulfilled?: boolean ){
        this.method = method;
        this.url = url;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
    }
  }
  
  let myData = new Requestt('GET','http://google.com', 'HTTP/1.1', '');

    console.log(myData)
  
})();
