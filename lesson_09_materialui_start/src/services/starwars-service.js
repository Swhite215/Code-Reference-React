export const getPeople = async () => {
    try {
        let result = await fetch("https://swapi.dev/api/people");

        return result.json();
    } catch(e) {
        console.log(e);
    }
}