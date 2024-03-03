<?php

namespace App\Http\Controllers;

use App\Repositories\CompanyRepository;

use Illuminate\Http\Request;

class CompanyController extends Controller
{
    public $successStatus = 200;

    protected $companyRepository;

    /**
     * __construct
     *
     * @param  mixed $companyRepository
     * @return void
     */
    public function __construct(CompanyRepository $companyRepository)
    {
        $this->companyRepository = $companyRepository;
    }

    /**
     * index
     *
     * @return mixed
     */
    public function activities(Request $request)
    {
        $activities = $this->companyRepository->getActivities($request->all());

        return response()->json([
            'data' => [$activities]
        ]);
    }

    /**
     * store
     *
     * @param  mixed $request
     * @return void
     */
    public function store(Request $request)
    {
        return response()->json([
            'post-data' => $request->all()
        ], $this->successStatus);
    }
}
