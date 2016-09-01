walk(document.body);

function walk(node) 
{

    var child, next;
    if (node && node.classList && node.classList.contains('ace_editor')) {
        return;
    }

    switch ( node.nodeType )  
    {
        case 1:  // Element
        case 9:  // Document
        case 11: // Document fragment
            child = node.firstChild;
            while ( child ) 
            {
                next = child.nextSibling;
                walk(child);
                child = next;
            }
            break;

        case 3: // Text node
            handleText(node);
            break;
    }
}

function handleText(textNode) 
{
    var v = textNode.nodeValue;

    v = v.replace(/\bBig Data\b/g, "Small Data");
    v = v.replace(/\bbig Data\b/g, "small Data");
    v = v.replace(/\bBig data\b/g, "Small data");
    v = v.replace(/\bbig data\b/g, "small data");

    v = v.replace(/\blarge\b/g, "small");
    v = v.replace(/\bLarge\b/g, "Small");
    v = v.replace(/\bhigh\b/g, "low");
    v = v.replace(/\bHigh\b/g, "Low");
    v = v.replace(/\bpetabyte|terabyte|gigabyte|megabyte\b/g, "kilobyte");
    v = v.replace(/\bPetabyte|Terabyte|Gigabyte|Megabyte\b/g, "Kilobyte");
    textNode.nodeValue = v;
}
