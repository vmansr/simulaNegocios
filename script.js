document.addEventListener('DOMContentLoaded', () => {
    const elements = {
        calculate: document.getElementById('calculate'),
        random: document.getElementById('random'),
        clear: document.getElementById('clear'),
        applyDiscount: document.getElementById('applyDiscount'),
        increment: document.querySelectorAll('.increment'),
        decrement: document.querySelectorAll('.decrement'),
        results: document.getElementById('results')
    };

    const inputs = {
        demand: document.getElementById('demand'),
        order: document.getElementById('order'),
        fixedCost: document.getElementById('fixedCost'),
        variableCost: document.getElementById('variableCost'),
        fullPrice: document.getElementById('fullPrice'),
        discountPrice: document.getElementById('discountPrice'),
        discount: document.getElementById('discount')
    };

    const incrementValues = {
        demand: 100,
        order: 100,
        fixedCost: 50,
        variableCost: 1,
        fullPrice: 1,
        discountPrice: 1
    };

    elements.calculate.addEventListener('click', calculateProfit);
    elements.random.addEventListener('click', generateRandomValues);
    elements.clear.addEventListener('click', clearValues);
    elements.applyDiscount.addEventListener('click', applyDiscount);

    elements.increment.forEach(button => {
        button.addEventListener('click', () => updateValue(button.dataset.target, incrementValues[button.dataset.target]));
    });

    elements.decrement.forEach(button => {
        button.addEventListener('click', () => updateValue(button.dataset.target, -incrementValues[button.dataset.target]));
    });

    function applyDiscount() {
        const fullPrice = parseFloat(inputs.fullPrice.value);
        const discount = parseFloat(inputs.discount.value);

        if (isNaN(fullPrice) || isNaN(discount) || discount < 0 || discount > 100) {
            alert('Por favor, ingrese valores válidos para el precio y el descuento.');
            return;
        }

        inputs.fullPrice.value = (fullPrice * (1 - discount / 100)).toFixed(2);
        inputs.discount.value = 0;
        calculateProfit();
    }

    function updateValue(target, change) {
        inputs[target].value = Math.max(0, parseFloat(inputs[target].value) + change);
        calculateProfit();
    }

    function generateRandomValues() {
        inputs.demand.value = Math.floor(Math.random() * 3000) + 500;
        inputs.order.value = Math.floor(Math.random() * 3000) + 500;
        inputs.fixedCost.value = Math.floor(Math.random() * 1000) + 500;
        inputs.variableCost.value = Math.floor(Math.random() * 10) + 5;
        inputs.fullPrice.value = Math.floor(Math.random() * 20) + 10;
        inputs.discountPrice.value = Math.floor(Math.random() * 10) + 3;
        calculateProfit();
    }

    function clearValues() {
        Object.values(inputs).forEach(input => input.value = '0');
        elements.results.innerHTML = '';
    }

    function calculateProfit() {
        const values = Object.fromEntries(
            Object.entries(inputs).map(([key, input]) => [key, parseFloat(input.value)])
        );

        if (values.demand === 0 || values.order === 0) {
            elements.results.innerHTML = '';
            return;
        }

        const revenue = values.order <= values.demand
            ? values.order * values.fullPrice
            : (values.demand * values.fullPrice) + ((values.order - values.demand) * values.discountPrice);

        const costs = values.fixedCost + (values.order * values.variableCost);
        const profit = revenue - costs;

        displayResults({...values, revenue, costs, profit});
    }

    function displayResults(data) {
        elements.results.innerHTML = `
            <h2>Resultados:</h2>
            <p>Demanda: ${data.demand} camisetas</p>
            <p>Pedido: ${data.order} camisetas</p>
            <p>Costo fijo: $${data.fixedCost.toFixed(2)}</p>
            <p>Costo variable: $${data.variableCost.toFixed(2)} por camiseta</p>
            <p>Precio completo: $${data.fullPrice.toFixed(2)}</p>
            <p>Precio con descuento: $${data.discountPrice.toFixed(2)}</p>
            <p>Ingresos: $${data.revenue.toFixed(2)}</p>
            <p>Costos: $${data.costs.toFixed(2)}</p>
            <p>Beneficio: $${data.profit.toFixed(2)}</p>
        `;
    }
});