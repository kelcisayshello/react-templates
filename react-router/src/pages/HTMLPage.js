import React, { Component } from "react";

class HTMLPage extends Component {
    render() {
        return (
            <div>
                <h2>HTML</h2>
                <p>HTML documents are required to start with a Document Type Declaration (informally, a "doctype"). In browsers, the doctype helps to define the rendering mode—particularly whether to use quirks mode.</p>

                <p>The original purpose of the doctype was to enable the parsing and validation of HTML documents by SGML tools based on the Document Type Definition (DTD). The DTD to which the DOCTYPE refers contains a machine-readable grammar specifying the permitted and prohibited content for a document conforming to such a DTD. Browsers, on the other hand, do not implement HTML as an application of SGML and as consequence do not read the DTD.</p>
            </div>
        );
    }
}

export default HTMLPage;