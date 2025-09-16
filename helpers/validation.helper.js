export const checkCreationValues = async (fields, type) => {
    try {
        if (fields && Object.keys(fields).length > 0) {

            const userFields = ["userName", "email", "password", "phoneNumber"];
            const adminFields = ["email", "password"];
            const productFields = ["name", "title", "description", "price", "availQty", "category",]

            const requestFields = Object.keys(fields);
            const missingFields =
                type === "user"
                    ? userFields.filter(field => !requestFields.includes(field))
                    : type === "admin"
                        ? adminFields.filter(field => !requestFields.includes(field))
                        : type === "product"
                            ? productFields.filter(field => !requestFields.includes(field))
                            : null;

            if (missingFields.length > 0) {
                return { status: false, message: `${missingFields} is required!` }
            }
            return { status: true, message: "success" };
        } else {
            return { status: false, message: "all fields are required" }
        }
    } catch (error) {
        console.error({ checkUserRegVal: error });
        return { status: false, message: "all fields are required" }
    };
};
