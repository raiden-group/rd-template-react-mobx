import { observable, action } from "mobx";

class HomeStore {
    @observable name = "首页"
    @action
    setName = (text) => {
        this.name = text;
    }
}
export default new HomeStore();