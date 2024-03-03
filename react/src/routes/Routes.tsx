import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '@/screens/layout/header';
import Left from '@/screens/layout/left';
import Right from '@/screens/layout/right';
import Index from '@/screens/index';

const App = () => {
    return (
        <Router>
            <div className="wrap">
                <main>
                    <Header />
                    <section className="section">
                        <div className="content-box">
                            <div className="container">
                                <div className="row">
                                    <Left />
                                    <Routes>
                                        <Route path="/" element={<Index />} />
                                    </Routes>
                                    <Right />
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>

        </Router>
    );
};

export default App;