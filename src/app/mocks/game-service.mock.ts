import {API_USER_AUTH, API_USER_LOGIN} from "../utils/api.utils";
import {VALID_TOKEN, VALID_USER_LOGIN_DATA} from "./fetch.mock";
import {ProductNew} from "../models/productNew.model";
import {product} from "./product.mock";

export class GameServiceMock {
    public games: ProductNew[] = [];
    public countOfProducts: number = 1;
    public numberOfPages: number = 1;
    public async search(): Promise<void> {
        this.games = [product];
    }
}
