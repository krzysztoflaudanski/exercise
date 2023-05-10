const foo = function() {
  console.log(this);
}

const obj = {
  foo: foo
}

foo();
foo.call(5);
obj.foo();
