import Configuration from './config';
class ItemService {
  constructor() {
    this.config = new Configuration();
    // this.getHeaders = this.getHeaders.bind(this)
  }

  getHeaders() {
    return {
        'authorization' : window.sessionStorage.getItem("auth_token"), 
        "Content-Type": "application/json"
    }
  }

  async retrieveItems() {
    return fetch(this.config.base_url)
      .then(response => {
        if (!response.ok) {
          this.handleResponseError(response);
        }
        return response.json();
      })
      .then(json => {
        console.log("Retrieved items:");
        console.log(json);
        const items = [];
        const itemArray = json._embedded.collectionItems;
        for(var i = 0; i < itemArray.length; i++) {
          itemArray[i]["link"] =  itemArray[i]._links.self.href;
          items.push(itemArray[i]);
        }
        return items;
      })
      .catch(error => {
        this.handleError(error);
      });
  }

  async getItem(itemLink) {
    console.log("ItemService.getItem():");
    console.log("Item: " + itemLink);
    return fetch(this.config.base_url+ itemLink)
      .then(response => {
        if (!response.ok) {
            this.handleResponseError(response);
        }
        return response.json();
      })
      .then(item => {
          item["link"] = item._links.self.href;
          return item;
        }
      )
      .catch(error => {
        this.handleError(error);
      });
  }

  async registerInstitute(newitem) {
    console.log("ItemService.createItem():");
    console.log(newitem);
    var res = await fetch(this.config.register_institute_api, {
      method: "POST",
      mode: "cors",
      headers: {
            "Content-Type": "application/json"
        },
      body: JSON.stringify(newitem)
    });
    var respon = await res.json();
    if(respon.status && respon.authorization && respon.success){
      console.log('response haders:::::', respon.headers)
      window.sessionStorage.setItem("auth_token", respon.authorization);

    }
    console.log('response:::::::', respon)
    return respon;
  }


  async loginInstitute(newitem) {
    console.log("ItemService.createItem():");
    console.log(newitem);

     var res = await fetch(this.config.login_institute_api, {
      method: "POST",
      mode: "cors",
      headers: {
            "Content-Type": "application/json"
        },
      body: JSON.stringify(newitem)
    });

    var respon = await res.json();
    console.log('response headert::::', respon);
    if(respon.status && respon.authorization && respon.success){
      console.log('response haders:::::', respon.headers)
      window.sessionStorage.setItem("auth_token", respon.authorization);
      
    }
    return respon;
    // .then(response => {
    //     console.log('registrationn response :::::::::::::::::::::::', response);
    //    if (!response.ok) {
    //         this.handleResponseError(response);
    //     }
    //     return response.json();
    // }).catch(error => {
    //     console.log('error occured::::', error);
    //     this.handleError(error);
    // });
  }

  async deleteItem(itemlink) {
    console.log("ItemService.deleteItem():");
    console.log("item: " + itemlink);
    return fetch(itemlink, {
      method: "DELETE",
      mode: "cors"
    })
      .then(response => {
        if (!response.ok) {
            this.handleResponseError(response);
        }
      })
      .catch(error => {
        this.handleError(error);
      });
  }

  async updateItem(item) {
    console.log("ItemService.updateItem():");
    console.log(item);
    return fetch(item.link, {
      method: "PUT",
      mode: "cors",
      headers: {
            "Content-Type": "application/json"
          },
      body: JSON.stringify(item)
    })
      .then(response => {
        if (!response.ok) {
          this.handleResponseError(response);
        }
        return response.json();
      })
      .catch(error => {
        this.handleError(error);
      });
  }

  async create(item, url) {
    console.log('create ogffer :::::::::::::::::',this.config.base_url + url);
    var res = await fetch(this.config.base_url + url, {
      method: "POST",
      mode: "cors",
      headers: this.getHeaders(),
      body: JSON.stringify(item)
    });
    var respon = await res.json();
    console.log('response:::::::', respon)
    return respon;
  }

  async get(data, url) {
    console.log("ItemService.getItem():",window.sessionStorage.getItem("auth_token"));
    console.log("Item: " + url);
      return fetch(this.config.base_url+ url,{
        method: "GET",
        mode: "cors",
        headers: {
              'authorization' : window.sessionStorage.getItem("auth_token"), 
              "Content-Type": "application/json"
          }
      })
      .then(x=> x.json())
      .then(data=>{
        console.log('respon :::::', data);
        return data;
      });
  }

  handleResponseError(response) {
      throw new Error("HTTP error, status = " + response.status);
  }
  handleError(error) {
      console.log(error.message);
  }
}
export default ItemService;