<?php

namespace App\Repositories;

class CompanyRepository extends AbstractRepository
{
    /**
     * jobs
     * @param mixed $formInput
     *
     * @return object
     */
    public function getActivities($formInput) {

       $filePath = storage_path('app/public/demographic.json');

        // Check if the file exists
        if (file_exists($filePath)) {
            $jsonContent = file_get_contents($filePath);
            $data = json_decode($jsonContent, true);

            return $data;
        }

        return [];
    }

    /**
     * createJob
     * @param mixed $formInput
     *
     * @return object
     */
    public function createJob($formInput) {

        return \App\Models\Job::create([
            'summary' => $formInput['summary'],
            'description' => $formInput['description'],
            'property_id' => $formInput['property_id'],
        ]);

    }
}
