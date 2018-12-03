//ASYNC GET FETCH REQUEST
export const getFunction = async () => {
    try {
        let response = await fetch(
            process.env.REACT_APP_DOMAIN + "/api/hierarchy",
            {
                credentials: "include"
            }
        );

        if (!response.ok) {
            throw new Error("Network response was not OK");
        }
        return response.json();
    } catch (err) {
        console.log(err);
    }
};

//ASYNC POST FETCH REQUEST
export const postFunction = async data => {
    try {
        let response = await fetch(
            process.env.REACT_APP_DOMAIN + `/api/hierarchy`,
            {
                credentials: "include",
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            }
        );

        if (!response.ok) {
            let body = await response.json();
            throw new Error(body.message);
        }

        return response.json();
    } catch (err) {
        console.error(err);
        throw err;
    }
};
