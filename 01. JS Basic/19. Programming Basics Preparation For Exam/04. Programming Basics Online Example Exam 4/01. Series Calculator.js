function seriesCalculator(nameOfSeries, countSeasons, countEpisodes, regularEpisode) {

    let commercials = regularEpisode * 0.2;
    let fullEpisode = regularEpisode + commercials;
    let specialEpisode = fullEpisode + 10;
    let oneSeason = (countEpisodes - 1) * fullEpisode + specialEpisode;
    let total = oneSeason * countSeasons;

    console.log(`Total time needed to watch the ${nameOfSeries} series is ${Math.floor(total)} minutes.`);

}
seriesCalculator('Lucifer', 3, 18, 55,);
seriesCalculator('Game of Thrones', 7, 10, 50);
seriesCalculator('Riverdale', 3, 21, 45);