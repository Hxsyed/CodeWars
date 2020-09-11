function hello(name) {
  // base case
  if (name === undefined || name.length === 0) {
    return "Hello, World!";
  } else {
    return (
      "Hello, " + name[0].toUpperCase() + name.substring(1).toLowerCase() + "!"
    );
  }
}

hello("johN");
// , 'Hello, John!', "returns 'Hello, John!' when given 'johN'")
hello("alice");
// , 'Hello, Alice!', "returns 'Hello, Alice!' when given 'alice'")
hello();
// , 'Hello, World!', "returns 'Hello, World!' when name is not given")
hello("");
// , 'Hello, World!', "returns 'Hello, World!' when name is an empty String")
