"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = __importDefault(require("./onelogin/resources/users"));
const apps_1 = __importDefault(require("./onelogin/resources/apps"));
const smart_mfa_1 = __importDefault(require("./onelogin/use_cases/smart_mfa"));
const pkce_1 = __importDefault(require("./onelogin/use_cases/pkce"));
const axios_client_adapter_1 = __importDefault(require("./http_clients/client_adapters/axios_client_adapter"));
const http_repository_1 = __importDefault(require("./repositories/http_repository"));
const onelogin_http_client_1 = require("./http_clients/onelogin_http_client");
class Client {
    constructor(config) {
        // Initialize HTTP Clients
        let oneLoginClient = new onelogin_http_client_1.OneLoginHTTPClient(config, new axios_client_adapter_1.default());
        // CRUD Resources
        this.resourceRepository = new http_repository_1.default(oneLoginClient);
        this.appsRepository = new apps_1.default(this.resourceRepository);
        this.usersRepository = new users_1.default(this.resourceRepository);
        // Use Cases
        this.pkce = new pkce_1.default(oneLoginClient);
        this.smartMFA = new smart_mfa_1.default(oneLoginClient);
    }
}
exports.default = Client;
//# sourceMappingURL=main.js.map