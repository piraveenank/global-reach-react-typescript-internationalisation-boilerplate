# Global Reach: React TypeScript Internationalisation Boilerplate

Welcome to GlobalReach, a Internationalisation Boilerplate that allows you add new languages in seconds. Built on the robust foundation of React and TypeScript, our boilerplate empowers developers to create multilingual web applications with utmost ease. Say goodbye to language barriers and hello to a world of possibilities. GlobalReach provides you with a powerful python script that allows you to effortlessly implement and manage translations, ensuring your app speaks the language of your global audience. Whether you're building a portfolio, an e-commerce platform, or a dynamic web app, GlobalReach simplifies the complexities of Internationalisation, allowing you to focus on what truly matters: crafting exceptional user experiences that resonate across cultures and borders.

## Language Support
Note: This library only supports the language codes inside [/LanguageCodes/LanguageCode.json](https://github.com/piraveenank/global-reach-react-typescript-internationalisation-boilerplate/blob/main/src/multiLanguage/LanguageCodes/LanguageCodes.json) or https://py-googletrans.readthedocs.io/en/latest/#language-detection

## Internationalisation (i18n)

The Alert Hub project supports internationalisation to make the application accessible in multiple languages. The translations are managed using Python scripts and language-specific resource files.

### Getting Started

1. Ensure you have Python installed on your system.
2. Clone the repository and navigate to the project root directory.
3. Open a terminal or command prompt.

### Installation

To install the required dependencies, run the following command in your terminal:

   ```bash
   pip install googletrans==3.1.0a0
   ```
This will install the necessary packages required for the translation script.

### Running the Translation Script

1. The required translation files are located in the `src/multiLanguage` directory.
2. To initiate the translation process, execute the following command in your terminal:

   ```bash
   python translater.py
   
Follow the prompts:
1. You will be asked whether you want to delete a language from the website. Enter 'Y' (yes) or 'N' (no) accordingly.
1. You will be prompted to enter the target language code (e.g., 'es' for Spanish). Choose the appropriate language code from the list.
2. You will also be asked whether existing translations should be overwritten. Enter 'Y' (yes) or 'N' (no) accordingly.
The script will process the translations and update the language-specific resource files accordingly.

Please note that maintaining and updating translations is an ongoing process. Make sure to follow best practices for internationalisation and localisation to ensure a seamless user experience across different languages.
Feel free to contribute new translations or improve existing ones to make the Alert Hub more accessible to users around the world.

Do not modify the existing supportedLanguages.json file in /src/multiLanguage/locales.
