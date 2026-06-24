// Compare functionality
const compareProducts = [
    { id: 1, name: "Canon EOS R5", sensor: "45MP", video: "8K", price: "₹2,45,000", iso: "100-51200", autofocus: "Dual Pixel AF", weight: "650g" },
    { id: 2, name: "Sony A7 IV", sensor: "33MP", video: "4K", price: "₹1,95,000", iso: "100-51200", autofocus: "Fast hybrid AF", weight: "650g" },
    { id: 3, name: "Nikon Z6 II", sensor: "24.5MP", video: "4K", price: "₹1,65,000", iso: "100-51200", autofocus: "Hybrid AF", weight: "705g" },
    { id: 4, name: "Fujifilm X-T5", sensor: "40MP", video: "6.2K", price: "₹1,55,000", iso: "125-12800", autofocus: "Phase detect AF", weight: "607g" }
];

function populateCompareDropdowns() {
    const select1 = document.getElementById('product1');
    const select2 = document.getElementById('product2');
    if (!select1 || !select2) return;

    compareProducts.forEach(product => {
        const option1 = document.createElement('option');
        option1.value = product.id;
        option1.textContent = product.name;
        select1.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = product.id;
        option2.textContent = product.name;
        select2.appendChild(option2);
    });
}

function renderComparison(productA, productB) {
    const result = document.getElementById('comparisonResult');
    if (!result) return;

    if (!productA || !productB || productA.id === productB.id) {
        result.innerHTML = '<p class="text-white-50">Select two different products to compare.</p>';
        return;
    }

    result.innerHTML = `
        <div class="table-responsive">
            <table class="table table-dark table-bordered text-white align-middle">
                <thead>
                    <tr>
                        <th>Feature</th>
                        <th>${productA.name}</th>
                        <th>${productB.name}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>Sensor</td><td>${productA.sensor}</td><td>${productB.sensor}</td></tr>
                    <tr><td>Video</td><td>${productA.video}</td><td>${productB.video}</td></tr>
                    <tr><td>ISO Range</td><td>${productA.iso}</td><td>${productB.iso}</td></tr>
                    <tr><td>Autofocus</td><td>${productA.autofocus}</td><td>${productB.autofocus}</td></tr>
                    <tr><td>Weight</td><td>${productA.weight}</td><td>${productB.weight}</td></tr>
                    <tr><td>Price</td><td>${productA.price}</td><td>${productB.price}</td></tr>
                </tbody>
            </table>
        </div>
    `;
}

function handleCompare() {
    const select1 = document.getElementById('product1');
    const select2 = document.getElementById('product2');
    if (!select1 || !select2) return;

    const productA = compareProducts.find(p => String(p.id) === select1.value);
    const productB = compareProducts.find(p => String(p.id) === select2.value);
    renderComparison(productA, productB);
}

document.addEventListener('DOMContentLoaded', () => {
    populateCompareDropdowns();

    const compareBtn = document.getElementById('compareBtn');
    if (compareBtn) {
        compareBtn.addEventListener('click', handleCompare);
    }
});