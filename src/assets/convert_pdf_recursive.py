import os
from pdf2image import convert_from_path

# Get the directory where the script is located
current_dir = os.path.dirname(os.path.abspath(__file__))
input_root = current_dir

print(f"Searching for PDFs in: {input_root} and its subdirectories")

# Walk through the directory and its subdirectories recursively
for root, dirs, files in os.walk(input_root):
    for file in files:
        # Check for PDF extension
        if file.lower().endswith(".pdf"):
            full_path = os.path.join(root, file)
            print(f"Converting {file}...")
            
            try:
                # Convert PDF to images
                pages = convert_from_path(full_path, dpi=300)
                base_name = os.path.splitext(file)[0]
                
                for i, page in enumerate(pages):
                    # Save in the same directory as the PDF
                    output_filename = f"{base_name}_page_{i+1}.png"
                    output_path = os.path.join(root, output_filename)
                    
                    page.save(output_path, "PNG")
                    print(f"  -> Saved {output_filename}")
                    
            except Exception as e:
                print(f"Error converting {file}: {e}")

print("Conversion completed.")
