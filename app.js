$(document).ready(()=>{

	$("#fetch-data").click(()=>{
		getAllData();
	})
});

let getAllData = () =>{

	console.log("making request");
	$.ajax({
				type:'GET',
				dataType:'json',
				url:'http://api.open-notify.org/astros.json',
				success:(data) =>
				{
					console.log(data);
					let allPeople = data.people;
					for(person of allPeople)
					{
						let temp = `<div class="row">
										<div class="col">${person.name}</div>
										<div class="col">${person.craft}</div>
									</div>`
						$("#append-row").append(temp)
					}
				},
				error:(err) =>{alert("some error occured"); console.log(err);},
				beforeSend: ()=>{alert("fetching data, please wait...")},
				complete:() =>{alert("data fetched successfully")},
				timeout:3000
	});
}