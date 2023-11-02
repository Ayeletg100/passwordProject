class FXMLHttpRequest {
    open(method, url) {
        this.method = method;
        this.url = url;
    }
    send(obj) {
        this.obj = obj;
        const response = net(this.method, this.url, this.obj);
        this.response = response;
        this.onload();
    }
}
