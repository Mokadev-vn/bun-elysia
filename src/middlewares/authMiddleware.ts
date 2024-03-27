export default (context) => {
    console.log("Auth middleware");
    console.log(context);
    context.set.status = 401;

    return {
        status: 401,
        message: "Unauthorized",
    }
}