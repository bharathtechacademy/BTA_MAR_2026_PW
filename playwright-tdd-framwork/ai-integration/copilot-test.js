function calculateMaxProfit(prices) {
	if (!Array.isArray(prices) || prices.length < 2) {
		throw new Error("Please provide at least two price values.");
	}

	let minPrice = prices[0];
	let minDayIndex = 0;
	let maxProfit = 0;
	let buyDayIndex = 0;
	let sellDayIndex = 0;

	for (let day = 1; day < prices.length; day += 1) {
		const currentPrice = prices[day];
		const currentProfit = currentPrice - minPrice;

		if (currentProfit > maxProfit) {
			maxProfit = currentProfit;
			buyDayIndex = minDayIndex;
			sellDayIndex = day;
		}

		if (currentPrice < minPrice) {
			minPrice = currentPrice;
			minDayIndex = day;
		}
	}

	return {
		buyDay: buyDayIndex + 1,
		sellDay: sellDayIndex + 1,
		buyPrice: prices[buyDayIndex],
		sellPrice: prices[sellDayIndex],
		maxProfit,
	};
}

const nextSixDaysPrices = [2, 7, 3, 9, 13, 6];
const result = calculateMaxProfit(nextSixDaysPrices);

if (result.maxProfit > 0) {
	console.log("Buy on Day", result.buyDay, "at price", result.buyPrice);
	console.log("Sell on Day", result.sellDay, "at price", result.sellPrice);
	console.log("Maximum profit is", result.maxProfit);
} else {
	console.log("No profitable transaction possible. Maximum profit is 0.");
}

