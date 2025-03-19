
import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { Button } from "@/components/ui/button";
import { UploadIcon, FileSpreadsheetIcon, AlertCircleIcon } from "lucide-react";
import { toast } from "sonner";

interface ExcelUploaderProps {
  onDataLoaded: (data: any[]) => void;
}

const ExcelUploader: React.FC<ExcelUploaderProps> = ({ onDataLoaded }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Check if it's an Excel file
    const fileExtension = file.name.split('.').pop()?.toLowerCase();
    if (fileExtension !== 'xlsx' && fileExtension !== 'xls') {
      toast.error("Please upload a valid Excel file (.xlsx or .xls)");
      return;
    }

    setIsUploading(true);
    setFileName(file.name);

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = e.target?.result;
        const workbook = XLSX.read(data, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        
        if (jsonData.length === 0) {
          toast.error("The Excel file is empty");
          setIsUploading(false);
          return;
        }

        // Validate dataset has required columns (you can adjust these based on your dataset)
        const requiredColumns = ["hemoglobin", "status"];
        const sampleRow = jsonData[0];
        const missingColumns = requiredColumns.filter(
          col => !Object.keys(sampleRow).some(
            key => key.toLowerCase().includes(col.toLowerCase())
          )
        );

        if (missingColumns.length > 0) {
          toast.error(`Dataset missing required columns: ${missingColumns.join(", ")}`);
          setIsUploading(false);
          return;
        }

        onDataLoaded(jsonData);
        toast.success(`Successfully loaded ${jsonData.length} records from ${file.name}`);
      } catch (error) {
        console.error("Error parsing Excel file:", error);
        toast.error("Error parsing Excel file. Please check the format.");
      } finally {
        setIsUploading(false);
      }
    };

    reader.onerror = () => {
      toast.error("Error reading file");
      setIsUploading(false);
    };

    reader.readAsBinaryString(file);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Button 
          variant="outline" 
          onClick={() => document.getElementById('excel-upload')?.click()}
          disabled={isUploading}
          className="flex items-center gap-2"
        >
          {isUploading ? (
            <>Uploading...</>
          ) : (
            <>
              <UploadIcon className="h-4 w-4" />
              Upload Excel Dataset
            </>
          )}
        </Button>
        <input
          id="excel-upload"
          type="file"
          accept=".xlsx, .xls"
          className="hidden"
          onChange={handleFileUpload}
          disabled={isUploading}
        />
      </div>

      {fileName && (
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <FileSpreadsheetIcon className="h-4 w-4" />
          <span>{fileName}</span>
        </div>
      )}

      <div className="text-xs text-gray-500 flex items-center gap-1">
        <AlertCircleIcon className="h-3 w-3" />
        <span>Excel file should contain hemoglobin values and anemia status data</span>
      </div>
    </div>
  );
};

export default ExcelUploader;
