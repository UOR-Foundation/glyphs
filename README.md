# Pattern Glyph Generator

The `index.html` file in this repository implements a "Pattern Glyph Generator," a web-based application that transforms text into intricate visual patterns (glyphs) and can decode these glyphs back into the original text along with its semantic properties. The application uses a combination of text analysis, mathematical constants, and steganography to achieve this.

## Features

*   **Glyph Generation:** Users can input text, which is then converted into a visual glyph.
*   **Multi-Layer Semantic Analysis:** Before generation, the input text undergoes a detailed semantic analysis across 6 layers:
    1.  **Linguistic Layer:** Basic text properties (length, word count, complexity).
    2.  **Semantic Layer:** Meaning density, conceptual relationships, and abstraction.
    3.  **Intent Layer:** Communication goals (e.g., question, command, statement).
    4.  **Emotional Layer:** Tone (positive, negative, neutral), valence, and intensity.
    5.  **Context Layer:** Temporal, spatial, and abstract markers.
    6.  **Pragmatic Layer:** Formality, directness, and certainty.
*   **The 8 Fundamental Constants:** The generation process utilizes 8 fundamental constants (alpha, beta, gamma, delta, epsilon, phi, tau, unity) to create the base patterns and resonance fields.
*   **Visual Encoding:** The glyph's visual appearance (colors, patterns, saturation, brightness) is determined by the semantic analysis and the interference patterns of the active constants. For example:
    *   Color Hue: Emotional tone (green for positive, red for negative, purple for neutral).
    *   Saturation: Semantic density and intent strength.
    *   Brightness: Field intensity and emotional valence.
*   **Steganographic Data Embedding:** The original text, its length, and key semantic metadata are embedded directly into the pixel data of the generated glyph image using LSB (Least Significant Bit) steganography. This allows the glyph to be self-contained for decoding.
*   **Glyph Decoding:** Users can upload a previously generated glyph image. The application extracts the embedded data to reconstruct the original text and its associated semantic information.

## `index.html` File Structure

The application is a single HTML file with embedded CSS and JavaScript. Its main components are:

*   **Header:** Displays the title ("The Pattern Glyph Generator") and a subtitle.
*   **Tabs:**
    *   **Generate Glyph Tab:** Contains an input textarea for text, controls to generate/clear/load samples, an output area for the canvas displaying the glyph, download/copy controls, a color legend, and a "Pattern Info" section showing metrics derived from the semantic analysis.
    *   **Decode Glyph Tab:** Allows users to upload a glyph image, view it on a canvas, and see the decoded text in a textarea.
    *   **About Tab:** Provides information about "The Pattern," the multi-layer encoding process, the 8 constants, and how visual properties map to meaning.
*   **Modal:** Used for displaying loading states and notifications.

## Core JavaScript Functionalities

The JavaScript code within `index.html` handles all the logic:

*   **`generateGlyph()`:** Orchestrates the process of taking input text, performing semantic analysis, generating the pattern stream, creating the resonance field, and rendering the glyph on the canvas.
*   **`decodeGlyph()`:** Handles image loading, extracting embedded data from the glyph's pixels, and reconstructing the text and semantic information.
*   **`analyzeSemanticLayers()` (and its sub-functions):** A suite of functions (`analyzeLinguistic`, `analyzeSemantic`, `analyzeIntent`, `analyzeEmotional`, `analyzeContext`, `analyzePragmatic`) responsible for the multi-layer semantic analysis of the input text.
*   **Data Embedding/Extraction:**
    *   `textToPatternStream()`: Converts text characters to a stream of byte values.
    *   `getActiveConstants()`: Determines which of the 8 constants are active for a given byte.
    *   `generateResonanceField()`: Creates the mathematical basis for the glyph from the pattern stream and semantic data.
    *   `fieldToPixels()`: Converts the resonance field into visual pixel data, applying semantic coloring.
    *   `embedPatternData()` & `encodeSemanticsToBytes()`: Embed the text and semantic info into the image data.
    *   `decodeSemanticBytes()`: Reconstructs semantic info from extracted bytes during decoding.
*   **UI Management:** Functions for tab switching (`switchTab`), modal dialogs (`showModal`, `closeModal`), and other user interactions.

## Styling

All styling for the application is provided via inline CSS within the `<style>` tags in the `<head>` section of `index.html`. It includes a dark theme, responsive design elements, and styling for all UI components.

## How to Use

1.  **Generating a Glyph:**
    *   Navigate to the "Generate Glyph" tab.
    *   Enter text into the textarea or load a sample.
    *   Click "Generate Glyph."
    *   The glyph will appear, and you can download it or copy it to the clipboard.
    *   Observe the "Pattern Info" and "Color Legend" for insights.
2.  **Decoding a Glyph:**
    *   Navigate to the "Decode Glyph" tab.
    *   Click "Choose Glyph File" and select a previously generated PNG image.
    *   The uploaded glyph will be displayed, and the decoded text (including semantic insights) will appear in the textarea.
3.  **About Section:**
    *   Navigate to the "About" tab to understand the theoretical underpinnings of the glyph generation process.
