# Impact Canvas Cursor Rules

This directory contains Cursor rules for the Impact Canvas project. These rules provide context and guidance to the Cursor AI assistant when generating code and responses related to the project.

## Directory Structure

- `main.cursorrules`: Main entry point for Cursor rules, providing guidance on how to use the information in other rule files
- `project.cursorrules`: Project overview and product description
- `technical.cursorrules`: Technical specifications and architecture
- `coding.cursorrules`: Coding standards and best practices
- `config.json`: Configuration file for Cursor rules

## How It Works

When you use Cursor's AI features in this project, the AI will reference these rule files to:

1. Understand what Impact Canvas is and its purpose
2. Be aware of the technical architecture and implementation details
3. Generate code that aligns with your product specifications
4. Reference the correct technologies and approaches specified in your documentation
5. Follow the coding standards and best practices defined for the project

## Updating the Rules

If you need to update the rules, you can modify the appropriate files:

- Update `project.cursorrules` if there are changes to the product description or features
- Update `technical.cursorrules` if there are changes to the technical architecture or implementation details
- Update `coding.cursorrules` if there are changes to the coding standards or best practices
- Update `main.cursorrules` if there are changes to how the AI should use the information in the other rule files
- Update `config.json` if there are changes to the configuration of the rules

## References

The rules reference the following documents:

- Product Description: `impact-canvas/spec/Product_Description-Impact Canvas.pdf`
- Technical Specification: `impact-canvas/spec/Technical_Specification-Impact-Canvas.pdf`

If these documents are updated, you may need to update the corresponding rule files to reflect the changes.

## Testing the Rules

To test if the rules are working correctly, you can ask Cursor AI questions about the Impact Canvas project, such as:

- "What is Impact Canvas?"
- "How should I implement the frontend for Impact Canvas?"
- "What technologies should I use for the backend of Impact Canvas?"
- "What coding standards should I follow for Impact Canvas?"

The AI should reference the appropriate information from the rule files in its responses.
