import { useEffect, useState } from 'react'

const VehicleForm = ({ assigneddriver }) => {

  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [selectedBrandID, setSelectedBrandID] = useState('');

  useEffect(() => {

    async function fetchBrands(){

      try 
      {
        const response = await fetch("http://localhost:5132/api/Vehicle/Brands");
        const data = await response.json();
        setBrands(data);
      }
      catch (err)
      {
        console.error(err)
      }

    }

    fetchBrands();

  }, [selectedBrandID]);

  useEffect(() => {
    async function fetchModels() {
      try {
        if(selectedBrandID){
          const response = await fetch(`http://localhost:5132/api/Vehicle/Brand/Models?brandId=${selectedBrandID}`);
          const data = await response.json();
          setModels(data);
        } else {
          setModels([]);
        }

      } catch (err) {
        console.log(err);
      }
    }

    fetchModels();  
  }, [selectedBrandID]);
   

  const unlockModels = (event) => {

    const brandID = event.target.value
    setSelectedBrandID(brandID);
  }
    

  return (
    <div className='formWrapper'>
        <form >

            <label htmlFor="brand">Brand</label>
            <select name="brand" id="brand" required onChange={unlockModels}>
              <option disabled selected>Select a brand</option>

                  {brands.map((brand) => (
                      <option key={brand.id} value={brand.id} >
                          {brand.brandName}
                      </option>))}
            </select>

        
              <label htmlFor="model">Model</label>
              <select name="model" id="modelselect" required disabled={!selectedBrandID}>
                  <option disabled={!selectedBrandID} selected>Select a model</option>

                      {models.map((model) => (
                      <option key={model.id} value={model.id}>
                          {model.modelName}
                      </option>))}


              </select>


            <label htmlFor="chassisnr">Chassisnr</label>
            <input type="text" 
                   id="chassisnr"
                   required
                     />

            <label htmlFor="licensplate">Licensplate</label>
            <input type="text" id="licenseplate" />

            <label htmlFor="color">Color</label>
            <input type="text" id="color" />

            <label>Fuel</label>
            <select>
                <option>Gasoline</option>
                <option>Diesel</option>
            </select>

            <label htmlFor="doors">Doors</label>
            <input type="number" id='doors' />

            <label htmlFor="driver">Driver (ssn)</label>
            <input type="text" id='driver' value={assigneddriver}/>


        </form>

        <button className='AddVehicleBTN regularvehicleBTN' >Add vehicle</button>
    </div>
  )
}

export default VehicleForm