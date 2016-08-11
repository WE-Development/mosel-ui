import $ from "jquery";
import {MoselUI} from "./controller/moselui.es6";

$(document).ready(function () {
    window.app = new MoselUI($('#moselui'));
    window.app.load();
});