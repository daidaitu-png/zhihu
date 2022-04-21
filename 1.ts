interface book {
	name: "zs";
	age: 12;
}
type name = Pick<book, "name">;
type age = Omit<book, "name">;

const add = (a) => (b) => a + b;
const f = useMemo(add, []);

const brr = [9, 5, 1, 6, 4];
function sort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let min = arr[i];
		for (let j = 1; j < arr.length - 1; j++) {
			if (min > arr[j]) {
				min = arr[j];
				i = j;
			}
			arr[j] = arr[i];
			arr[i] = min;
		}
	}
}
sort(brr);

const deepClone = (obj) => {
  let newObj =null;
	if (typeof obj === "object" && typeof obj !== null) {
    newObj = obj instanceof Array?[]:{}
    for (const i in obj) {
      newObj[i] = deepClone(obj[i])
    }
	}else{
    newObj = obj
  }
  return newObj;
};

let person = {
  name:'zs',
  age:12,
  sons:[
    {
      name:"sd",
      age:54
    },
    {
      name:"gf",
      age:45
    }
  ]
}

const person2 = deepClone(person)

