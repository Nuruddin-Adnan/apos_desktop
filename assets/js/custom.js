  // search option change on typing
  const searchInput = document.querySelector('#search-input');
  const searchById = document.querySelector('#search-by-id')
  const searchBytyping = document.querySelector('#search-by-typing')
  

  searchInput.addEventListener('keypress', function(){
    if(searchInput.value.length >= 0){
        searchById.classList.add('d-none');
        searchBytyping.classList.remove('d-none');
    } else {
        searchById.classList.remove('d-none');
        searchBytyping.classList.add('d-none');
    }
  })

  searchInput.addEventListener('keyup', function(){
    if(searchInput.value.length > 0){
        searchById.classList.add('d-none');
        searchBytyping.classList.remove('d-none');
    } else {
        searchById.classList.remove('d-none');
        searchBytyping.classList.add('d-none');
    }
  })
