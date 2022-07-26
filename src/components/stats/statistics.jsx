import '../stats/data.css'


function Statistics ({title='Upload Stats', stats,}) {
 
  const randColor = () =>  {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}


  return (
<section class="statistics">
  
<h2 class="title">{title}</h2>
  <ul class="stat-list">

{stats.map(stat => ( <li key={stat.id} class="item" style={{
        backgroundColor: randColor()
      
      }}>
      <span class="label">{stat.label}</span>
      <span class="percentage" >{stat.percentage}%</span>
    </li>)

    
)}

 
  </ul>
</section>)

}





export default Statistics;