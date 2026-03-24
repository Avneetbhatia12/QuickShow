export const dateFormat =(date) =>{
    return new Date(date).toLocaleDateString('en-US', {
        weekday:'short',
        month:'long',
        day:'numeric',
        year:'numeric'
    })
}