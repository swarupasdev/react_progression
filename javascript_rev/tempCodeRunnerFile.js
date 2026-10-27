getUser()
    .then(user=>{
        return getProfile(user.id, user.name)
    })
    .then(profile=>{
        return getDashboard(profile.id,profile.role)
    })
    .then(dashboard=>{
        console.log(dashboard)
    })
    .catch(error=>{
        console.log(error)
    })