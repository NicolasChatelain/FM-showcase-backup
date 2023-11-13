export async function fetchBrands(props) {

    try {
        const response = await fetch("http://localhost:5132/api/Vehicle/Brands");
        const data = await response.json();
        props.setBrands(data);
    }
    catch (err) {
        console.error(err)
    }

}