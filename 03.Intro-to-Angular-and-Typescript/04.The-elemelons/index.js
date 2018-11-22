var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function elemelons() {
    var Melon = /** @class */ (function () {
        function Melon(weight, melonSort) {
            this.weight = weight;
            this.melonSort = melonSort;
            this.elementIndex = this.weight * this.melonSort.length;
        }
        Melon.prototype.stringify = function () {
            console.log("Element: " + this.elementType);
            console.log("Sort: " + this.melonSort);
            console.log("Element Index: " + this.elementIndex);
        };
        return Melon;
    }());
    var Watermelon = /** @class */ (function (_super) {
        __extends(Watermelon, _super);
        function Watermelon(weight, melonSort) {
            var _this = _super.call(this, weight, melonSort) || this;
            _this.elementType = 'Water';
            return _this;
        }
        return Watermelon;
    }(Melon));
    var Firemelon = /** @class */ (function (_super) {
        __extends(Firemelon, _super);
        function Firemelon(weight, melonSort) {
            var _this = _super.call(this, weight, melonSort) || this;
            _this.elementType = 'Fire';
            return _this;
        }
        return Firemelon;
    }(Melon));
    var Airmelon = /** @class */ (function (_super) {
        __extends(Airmelon, _super);
        function Airmelon(weight, melonSort) {
            var _this = _super.call(this, weight, melonSort) || this;
            _this.elementType = 'Air';
            return _this;
        }
        return Airmelon;
    }(Melon));
    var Earthmelon = /** @class */ (function (_super) {
        __extends(Earthmelon, _super);
        function Earthmelon(weight, melonSort) {
            var _this = _super.call(this, weight, melonSort) || this;
            _this.elementType = 'Earth';
            return _this;
        }
        return Earthmelon;
    }(Melon));
    var Melolemonmelon = /** @class */ (function (_super) {
        __extends(Melolemonmelon, _super);
        function Melolemonmelon(weight, melonSort) {
            var _this = _super.call(this, weight, melonSort) || this;
            _this.elements = ['Water', 'Fire', 'Air', 'Earth'];
            return _this;
        }
        Melolemonmelon.prototype.morph = function () {
            this.elementType = this.elements.shift();
            this.stringify();
            this.elements.push(this.elementType);
        };
        return Melolemonmelon;
    }(Melon));
    var watermelon = new Watermelon(10, 'small');
    watermelon.stringify();
    var firemelon = new Firemelon(10, 'big');
    firemelon.stringify();
    var melolemonmelon = new Melolemonmelon(12.5, 'Kingsize');
    melolemonmelon.morph();
    melolemonmelon.morph();
    melolemonmelon.morph();
    melolemonmelon.morph();
    melolemonmelon.morph();
}
elemelons();
