function calcGeometry(r) {
    let calcCircumfrence = (2 * Math.PI * r);
    console.log("the circumference is" + calcCircumfrence);
    let area = Math.PI * r * r;
    console.log("the area is " + area);
}
calcGeometry(10);