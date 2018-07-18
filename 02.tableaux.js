var cl = console.log
var villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans']

villes.forEach(function(element){cl(element)})

cl(villes.every(function(element){
    return element.includes('a')
}))

cl(villes.some(function(element){
    return element.includes('-')
}))

var lettreADansToutesLesVilles = villes.filter(function(element){
    return !element.includes(' ') && !element.includes('-')
})

cl(lettreADansToutesLesVilles)

var majVilles = villes.filter(function(element){
    return element.substr(element.length - 1) == 's'
}).map(function(element){
    return element.toUpperCase()
})

cl(majVilles)