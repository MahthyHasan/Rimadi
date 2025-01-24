import Account from "../models/account.model.js";

// Add new account entry
export const addAccountEntry = async (req, res) => {
  try {
    const { date, entryType, amount, description, category, paymentMethod, reference } = req.body;

    const newEntry = new Account({
      date,
      entryType,
      amount,
      description,
      category,
      paymentMethod,
      reference,
      createdBy: req.user._id,
    });

    const savedEntry = await newEntry.save();
    res.status(201).json(savedEntry);
  } catch (error) {
    console.error(`Error Adding Account Entry: ${error.message}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get all account entries
export const getAccountEntries = async (req, res) => {
  try {
    const entries = await Account.find({ createdBy: req.user._id });
    res.status(200).json(entries);
  } catch (error) {
    console.error(`Error Fetching Account Entries: ${error.message}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get a specific account entry
export const getAccountEntryById = async (req, res) => {
  try {
    const entry = await Account.findById(req.params.id);
    if (!entry) {
      return res.status(404).json({ message: "Entry Not Found" });
    }
    res.status(200).json(entry);
  } catch (error) {
    console.error(`Error Fetching Account Entry: ${error.message}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Update account entry
export const updateAccountEntry = async (req, res) => {
  try {
    const { date, entryType, amount, description, category, paymentMethod, reference } = req.body;
    const updatedEntry = await Account.findByIdAndUpdate(
      req.params.id,
      { date, entryType, amount, description, category, paymentMethod, reference },
      { new: true }
    );

    if (!updatedEntry) {
      return res.status(404).json({ message: "Entry Not Found" });
    }

    res.status(200).json(updatedEntry);
  } catch (error) {
    console.error(`Error Updating Account Entry: ${error.message}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Delete account entry
export const deleteAccountEntry = async (req, res) => {
  try {
    const deletedEntry = await Account.findByIdAndDelete(req.params.id);

    if (!deletedEntry) {
      return res.status(404).json({ message: "Entry Not Found" });
    }

    res.status(200).json({ message: "Entry Deleted Successfully" });
  } catch (error) {
    console.error(`Error Deleting Account Entry: ${error.message}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
