import $ from "jquery";
import {MoselUI} from "./controller/moselui.es6";

$(document).ready(function () {
    window.app = new MoselUI();
    window.app.load($('#moselui'), window.app);
});