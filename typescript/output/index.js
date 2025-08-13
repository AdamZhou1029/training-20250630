var num = 1;
var str = "1";
var bool = true;
var u = undefined;
var n = null;
var numberArra = [1, 2, 3, 4, 5];
var person = {
    name: "alice",
    age: 18,
};
var person2 = {
    name: "bob",
    age: "18",
    direction: "north",
};
var Direction2;
(function (Direction2) {
    Direction2["North"] = "north";
    Direction2["South"] = "south";
    Direction2["East"] = "east";
    Direction2["West"] = "west";
})(Direction2 || (Direction2 = {}));
var direction = Direction2.North;
console.log(direction);
//# sourceMappingURL=index.js.map