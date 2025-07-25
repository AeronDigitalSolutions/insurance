"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var AgentsPage = function () {
    var _a = react_1.useState([]), agents = _a[0], setAgents = _a[1];
    var fetchAgents = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res, data, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('/api/getagent')];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    data = _a.sent();
                    setAgents(data.agents);
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    console.error('Error fetching agents:', err_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    react_1.useEffect(function () {
        fetchAgents();
    }, []);
    return (react_1["default"].createElement("div", { className: "p-4" },
        react_1["default"].createElement("h2", { className: "text-xl font-semibold mb-4" }, "All Agents"),
        react_1["default"].createElement("table", { className: "table-auto w-full border" },
            react_1["default"].createElement("thead", null,
                react_1["default"].createElement("tr", { className: "bg-gray-100" },
                    react_1["default"].createElement("th", { className: "px-4 py-2 border" }, "Name"),
                    react_1["default"].createElement("th", { className: "px-4 py-2 border" }, "Email"),
                    react_1["default"].createElement("th", { className: "px-4 py-2 border" }, "District"),
                    react_1["default"].createElement("th", { className: "px-4 py-2 border" }, "City"),
                    react_1["default"].createElement("th", { className: "px-4 py-2 border" }, "State"),
                    react_1["default"].createElement("th", { className: "px-4 py-2 border" }, "Assigned To"))),
            react_1["default"].createElement("tbody", null, agents.map(function (agent) { return (react_1["default"].createElement("tr", { key: agent._id },
                react_1["default"].createElement("td", { className: "border px-4 py-2" }, agent.name),
                react_1["default"].createElement("td", { className: "border px-4 py-2" }, agent.email),
                react_1["default"].createElement("td", { className: "border px-4 py-2" }, agent.district),
                react_1["default"].createElement("td", { className: "border px-4 py-2" }, agent.city),
                react_1["default"].createElement("td", { className: "border px-4 py-2" }, agent.state),
                react_1["default"].createElement("td", { className: "border px-4 py-2" }, agent.assignedTo))); })))));
};
exports["default"] = AgentsPage;
