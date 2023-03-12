import Faker from 'faker';

const App = () =>{
localStorage.setItem('name','kavya')
localStorage.setItem('object',JSON.stringify({
  name:'some',college:'svecw'
}))
console.log(localStorage.getItem('object'))
if(localStorage.getItem('name')=='kavya'){
  console.log('crt')
}
else{
  console.log('wrong')
}

  return <>
  <table class="ui very basic collapsing celled table"  style={{marginLeft:40,marginTop:50}}>
  <thead>
    <tr><th>Employee</th>
    <th>Correct Guesses</th>
  </tr></thead>
  <tbody>
    <tr>
      <td>
        <h4 class="ui image header">
          <img src={Faker.image.image()} class="ui mini rounded image" alt="image" />
          <div class="content">
            Lena
            <div class="sub header">Human Resources
          </div>
        </div>
      </h4></td>
      <td>
        22
      </td>
    </tr>
    <tr>
      <td>
        <h4 class="ui image header">
          <img src={Faker.image.image()} class="ui mini rounded image" alt="image" />
          <div class="content">
            Matthew
            <div class="sub header">Fabric Design
          </div>
        </div>
      </h4></td>
      <td>
        15
      </td>
    </tr>
    <tr>
      <td>
        <h4 class="ui image header">
          <img src={Faker.image.image()} class="ui mini rounded image" alt="image" />
          <div class="content">
            Lindsay
            <div class="sub header">Entertainment
          </div>
        </div>
      </h4></td>
      <td>
        12
      </td>
    </tr>
    <tr>
      <td>
        <h4 class="ui image header">
          <img src={Faker.image.image()} class="ui mini rounded image" alt="image" />
          <div class="content">
            Mark
            <div class="sub header">Executive
          </div>
        </div>
      </h4></td>
      <td>
        11
      </td>
    </tr>
  </tbody>
</table>
  </>
}

export default App;