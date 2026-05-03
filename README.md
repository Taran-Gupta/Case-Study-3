# Case Study 3

The purposes of this repository is to guide 2nd year students in completing a spam-detection model using text-based data. An outline of the required software can be found in section 1. Section 2 contains the repositories organization and files, while section 3 provides in-depth steps on reproducability. This likely would be removed if a student were to actually complete this project, but is currently included in order to comply with the CS3 rubric, which states that everything required for MI3 should be included (which includes steps for reproducability). 

## Section 1: Software and platform section
- Type of Software: Integrated Development Environment (IDE) / Interactive Computing Platform / Web-based notebook environment
- Packages installed: (ADD!!!)
- Platform: Cloud-based (SaaS)

## Section 2: A Map of your documentation
```

DS4002_Project1/
│
├── README.md
├── LICENSE.md
├── CS3 Rubric.pdf
├── CS3 Hook.pdf
│
├── DATA/
│   ├── spam.csv
│   ├── SMS_Processed.csv
│   └── Data_Appendix.pdf
│
├── SCRIPTS/
│   ├── Analysis.ipynb
│   ├── Data Processing.ipynb
│   ├── EDA_1.ipynb
│   └── EDA_2.ipynb
│
└── OUTPUT/
    ├── Additional Features Output.pdf
    ├── Distribution_of_Spam_vs_Ham_Messages.png
    ├── Length_Density.png
    ├── Logistic Regression Outputs .pdf
    ├── Message_Length_Grouped_by_Message_Type.png
    ├── Percentage_of_Capitalized_vs_NonCapitalized_Letters_Ham.png
    ├── Percentage_of_Capitalized_vs_NonCapitalized_Letters_Spam.png
    ├── Top_Special_Chacters_and_Words_Ham.png
    ├── Top_Special_Chacters_and_Words_Spam.png
    └── Vectorizer Output.pdf
```
## Section 3: Instructions for reproducing results

This section will cover the order in which code files may be executed or created if remaking from scratch. The organization of this repository will not be included in this section, as the layout is already described in detail in Section 2 above. Specific code chunks should be referenced for a detailed understanding of model creation and execution. All code contains some combination of in-line comments and headers.

# To Reproduce Results:
1. Download repository on a local/cloud machine and ensure all data files are copied correctly.
2. If the processed data is downloaded proceed to step 3. If not, run `Data Preprocessing.ipynb` and check that the file names and relative path match your instance of the repository. This is also where a separate data file with different SMS messages could be susbstituted into the analysis. If this is the case, more code alterations may be required to create a conforming dataset (ex. changing existing column names).
3. Run the `analysis.ipynb` file to create and run the models. Change the "random_state" in 1.3 to change the train-test split.

# To Recreate Code and Model:
1. Start with a dataset containing 2 columns: SMS messages (stored as strings) and a categorization variable indicating whether a message is "spam" or "ham".
2. Perform any EDA deemed necessary, although this group's EDA may be used in substitution for your own.
3. Recreate the data preprocessing script, focusing on removing NAs, renaming columns, casting "spam" vs "ham" to 0 and 1 respectively, and fixing any errors relating to character decoding issues (see the end of `Data Preprocessing.ipynb` for an example).
4. Save the cleaned and processed dataframe as another .csv in the "Data" folder.
5. Create an analysis script and import all relevant packages, mainly leveraging scitkitlearn, pandas, scipy, and nltk.
6. Validate data shape then split into train-test.
7. Create a vectorizer using scitkit and use the vectorizer as the main input into a MultinomialNB model. (NOTE: increasing `ngram_range` past 2 may result in performance issues. Ngrams are the size of each token)
8. Test model accuracy.
9. If the additional models are desired, create a function that encodes extra information that may separate spam from ham messages such as number of special characters. Note that since the distribution and values of these numbers are not normalized and DO NOT match the vectorizer outputs, model performance may diminish.
10. Test model accuracy after fitting the model using the training data.
11. Create a logistic regression model, leverage scitkitlearn packages. Column transform the data with the extra features before fitting a model on the training data.
12. Run a prediction on the training data and evaluate results.
13. Finally, compare the performance of all 3 models. Additional validation can be done by trying different train/test ratios and random states, as well as training/testing/applying the model to larger datasets.
