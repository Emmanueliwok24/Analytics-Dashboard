//   MODE
const onMode = document.getElementById('on-mode');

onMode.addEventListener('click', function() {
	if(this.checked) {
		document.body.classList.remove('dark');
        saveData()
	}
})
const offMode = document.getElementById('off-mode');

offMode.addEventListener('click', function() {
	if(this.checked) {
		document.body.classList.add('dark');
        saveData()

	}
})


function saveData() {
	localStorage.setItem("dat", document.body.classList);
  }

  function showTask() {
    document.body.classList = localStorage.getItem("dat");
	}

	showTask();

