function sumAge(user, qt) {
    if (isNaN(qt)) return user;
    const newUser = { ...user };
    newUser.age = user.age + qt;
    return newUser;
}
// {age: 1} -> {age: 1+n}
module.exports = sumAge;