# Dictionaries Documentation

## Introduction

In this project, dictionaries are used to manage translations for different languages. Each dictionary represents a specific language (e.g., English or French) and contains translation keys and their corresponding values.

## Usage

Dictionaries are organized as JSON files and are imported and utilized in the `src\i18n.ts` file. The `i18next` library is used as a React Hook to facilitate translation throughout the website.

## Directory Structure

- `src\i18n.ts`: The main configuration file where dictionaries are imported and configured for translation.
- `src\dictionaries\`: Directory containing individual dictionary files for each supported language.

## Dictionary Structure

Each dictionary file follows a specific structure with sections for different parts of the website, such as headers, home page, skills, footer, and more. Below is a breakdown of the dictionary structure:

### Header Translations

- `header.home`: Translations related to the home page navigation link.
- `header.projects`: Translations related to the projects page navigation link.
- `header.about`: Translations related to the about page navigation link.
- `header.contact`: Translations related to the contact page navigation link.

### Home Translations

- `home.title`: Title of the home page.
  - Description: Displayed as the main title on the home page.
- `home.description`: Description of the home page.
  - Description: Displayed as a brief introduction on the home page.
- `home.cta`: Call to action for the home page.
  - Description: Displayed as a link or button text, encouraging users to view projects.

### Skills Translations

- `skills.HTML`: Translation for the HTML skill.
- `skills.CSS`: Translation for the CSS skill.
- `skills.JavaScript`: Translation for the JavaScript skill.
- (Additional skills can be added here.)

### Footer Translations

- `footer.title`: Title for the contact section in the footer.
  - Description: Displayed as the title of the contact section on the home page.
- `footer.text`: Contact information text in the footer.
  - Description: Displayed as the contact information in the footer.

### AND MORE...

## Comments and Notes

- Comments within the dictionary files may provide additional context or notes for specific translations.
- Comments can also be used to indicate special considerations or usage instructions for certain translations.

## Importing Dictionaries

In the `src\i18n.ts` file, dictionaries are imported and configured for translation using the `i18next` library.

## Maintenance

To maintain and update translations, simply edit the corresponding dictionary file for the desired language. Make sure to maintain the structure and descriptions for clear documentation.

## Version Control

It's recommended to include the `dictionaries` directory and its contents in your project's version control system (e.g., Git) to track changes and collaborate effectively with team members.

---

By following this structure and documentation, you can easily manage and maintain translations for your website while ensuring that developers have clear guidance on each translation key's purpose and context.