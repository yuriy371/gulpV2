const textReduction = () => {
    let limit = 1463
    let texts = document.querySelectorAll(".reviews__comment")

    texts.forEach((it) => {
        // console.log(it.textContent.length);
        let textLength = it.outerHTML.length
        console.log(textLength);
        if (textLength > limit) {
        	var fullText = it.outerHTML;
        	// console.log(fullText);
        	it.outerHTML = fullText.slice(0, limit) + ' …';
            // it.textContent = it.textContent.substring(0, limit) + " …";
        } else {
            // console.log(15);
            return
        }
        
    })
}

export default textReduction