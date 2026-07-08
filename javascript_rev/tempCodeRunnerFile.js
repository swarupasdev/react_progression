    if(a.age===b.age && a.marks===b.marks){
        return a.name.localeCompare(b.name)
    }
    else if(a.marks===b.marks){
        return a.age-b.age
    }