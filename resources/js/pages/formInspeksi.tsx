import { AlertTriangle, Camera, Check, FileText, Image, Layers, Plus, Shield, Trash2 } from 'lucide-react';
import { useState } from 'react';

export default function App() {
    const [activeTab, setActiveTab] = useState('assets');
    const [assets, setAssets] = useState([
        {
            id: 1,
            claim_id: 'CL-2024-001',
            nama_unit: 'AC 1 PK',
            lokasi: 'Ruang Meeting Utama',
            deskripsi: 'AC tidak dingin, suara berisik',
        },
        {
            id: 2,
            claim_id: 'CL-2024-002',
            nama_unit: 'TV 42 inch',
            lokasi: 'Lobby Utama',
            deskripsi: 'Gambar tidak muncul, suara normal',
        },
    ]);

    const [components, setComponents] = useState([
        { id: 1, asset_id: 1, nama_komponen: 'Kompresor' },
        { id: 2, asset_id: 1, nama_komponen: 'Evaporator Coil' },
        { id: 3, asset_id: 1, nama_komponen: 'Fan Motor' },
        { id: 4, asset_id: 2, nama_komponen: 'PCB Main Board' },
        { id: 5, asset_id: 2, nama_komponen: 'Remote Control' },
        { id: 6, asset_id: 2, nama_komponen: 'Power Supply' },
    ]);

    const [inspections, setInspections] = useState([
        {
            id: 1,
            component_id: 1,
            hasil_analisis: 'Kompresor mengeluarkan suara berisik dan getaran berlebihan',
            kemungkinan_penyebab: 'Bearing aus atau kekurangan refrigerant',
            solusi_rekomendasi: 'Ganti kompresor dan isi ulang refrigerant',
            status: 'NG',
        },
        {
            id: 2,
            component_id: 4,
            hasil_analisis: 'PCB mengalami kerusakan pada kapasitor',
            kemungkinan_penyebab: 'Lonjakan tegangan listrik',
            solusi_rekomendasi: 'Ganti PCB main board',
            status: 'NG',
        },
    ]);

    const [photos, setPhotos] = useState([
        {
            id: 1,
            inspection_id: 1,
            path_foto: 'https://placehold.co/300x200/1e293b/64748b?text=Kompresor+Check',
            keterangan: 'Kondisi kompresor sebelum perbaikan',
        },
        {
            id: 2,
            inspection_id: 1,
            path_foto: 'https://placehold.co/300x200/1e293b/64748b?text=PCB+Damage',
            keterangan: 'Kerusakan pada PCB main board',
        },
    ]);

    const [newAsset, setNewAsset] = useState({
        claim_id: '',
        nama_unit: '',
        lokasi: '',
        deskripsi: '',
    });

    const [newComponent, setNewComponent] = useState({
        asset_id: '',
        nama_komponen: '',
    });

    const [newInspection, setNewInspection] = useState({
        component_id: '',
        hasil_analisis: '',
        kemungkinan_penyebab: '',
        solusi_rekomendasi: '',
        status: 'OK',
    });

    const [newPhoto, setNewPhoto] = useState({
        inspection_id: '',
        path_foto: '',
        keterangan: '',
    });

    const [selectedAsset, setSelectedAsset] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Add new asset
    const handleAddAsset = () => {
        if (newAsset.claim_id && newAsset.nama_unit && newAsset.lokasi) {
            const asset = {
                id: assets.length + 1,
                ...newAsset,
            };
            setAssets([...assets, asset]);
            setNewAsset({ claim_id: '', nama_unit: '', lokasi: '', deskripsi: '' });
        }
    };

    // Add new component
    const handleAddComponent = () => {
        if (newComponent.asset_id && newComponent.nama_komponen) {
            const component = {
                id: components.length + 1,
                ...newComponent,
            };
            setComponents([...components, component]);
            setNewComponent({ asset_id: '', nama_komponen: '' });
        }
    };

    // Add new inspection
    const handleAddInspection = () => {
        if (newInspection.component_id && newInspection.hasil_analisis) {
            const inspection = {
                id: inspections.length + 1,
                ...newInspection,
            };
            setInspections([...inspections, inspection]);
            setNewInspection({
                component_id: '',
                hasil_analisis: '',
                kemungkinan_penyebab: '',
                solusi_rekomendasi: '',
                status: 'OK',
            });
        }
    };

    // Add new photo
    const handleAddPhoto = () => {
        if (newPhoto.inspection_id && newPhoto.path_foto) {
            const photo = {
                id: photos.length + 1,
                ...newPhoto,
            };
            setPhotos([...photos, photo]);
            setNewPhoto({ inspection_id: '', path_foto: '', keterangan: '' });
        }
    };

    // Remove items
    const removeAsset = (id) => {
        setAssets(assets.filter((asset) => asset.id !== id));
    };

    const removeComponent = (id) => {
        setComponents(components.filter((component) => component.id !== id));
    };

    const removeInspection = (id) => {
        setInspections(inspections.filter((inspection) => inspection.id !== id));
    };

    const removePhoto = (id) => {
        setPhotos(photos.filter((photo) => photo.id !== id));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            alert('Inspection data submitted successfully!');
        }, 2000);
    };

    // Filter components and inspections based on selected asset
    const filteredComponents = selectedAsset ? components.filter((comp) => comp.asset_id === parseInt(selectedAsset)) : [];

    const filteredInspections =
        filteredComponents.length > 0 ? inspections.filter((insp) => filteredComponents.some((comp) => comp.id === insp.component_id)) : [];

    const filteredPhotos =
        filteredInspections.length > 0 ? photos.filter((photo) => filteredInspections.some((insp) => insp.id === photo.inspection_id)) : [];

    return (
        <div className="min-h-screen overflow-hidden bg-black text-white">
            {/* Animated Background */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-blue-900/20"></div>
                <div className="absolute top-1/4 left-1/4 h-96 w-96 animate-pulse rounded-full bg-blue-500/10 blur-3xl"></div>
                <div className="absolute right-1/4 bottom-1/4 h-96 w-96 animate-pulse rounded-full bg-blue-700/10 blur-3xl delay-1000"></div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div
                        className="h-full w-full"
                        style={{
                            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
                            backgroundSize: '50px 50px',
                        }}
                    ></div>
                </div>
            </div>

            {/* Header */}
            <header className="relative z-10 border-b border-blue-800/30 bg-black/80 backdrop-blur-sm">
                <div className="mx-auto max-w-7xl px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-700">
                                <Shield className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <h1 className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-2xl font-bold text-transparent">
                                    INSPEKSI
                                </h1>
                                <p className="text-sm text-gray-400">Comprehensive Inspection System</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="text-right">
                                <div className="text-sm text-gray-300">Total Assets</div>
                                <div className="font-semibold text-blue-400">{assets.length}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="relative z-10 px-6 py-8">
                <div className="mx-auto max-w-7xl">
                    {/* Breadcrumb */}
                    <nav className="mb-8 flex items-center space-x-2 text-sm text-gray-400">
                        <a href="#" className="transition-colors hover:text-blue-400">
                            Dashboard
                        </a>
                        <span>/</span>
                        <a href="#" className="transition-colors hover:text-blue-400">
                            Inspections
                        </a>
                        <span>/</span>
                        <span className="text-blue-400">Inspection Form</span>
                    </nav>

                    <div className="grid gap-8 lg:grid-cols-4">
                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-8 rounded-2xl border border-blue-800/50 bg-gradient-to-br from-blue-900/30 to-gray-900/30 p-6 backdrop-blur-sm">
                                <h2 className="mb-6 text-xl font-bold">Inspection Workflow</h2>

                                <div className="space-y-2">
                                    {[
                                        { id: 'assets', label: 'Assets', icon: FileText, count: assets.length },
                                        { id: 'components', label: 'Components', icon: Layers, count: components.length },
                                        { id: 'inspections', label: 'Inspections', icon: AlertTriangle, count: inspections.length },
                                        { id: 'photos', label: 'Photos', icon: Camera, count: photos.length },
                                    ].map((tab) => (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id)}
                                            className={`flex w-full items-center justify-between rounded-lg p-3 text-left transition-all duration-300 ${
                                                activeTab === tab.id ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-300 hover:bg-blue-900/20'
                                            }`}
                                        >
                                            <div className="flex items-center space-x-3">
                                                <tab.icon className="h-5 w-5" />
                                                <span>{tab.label}</span>
                                            </div>
                                            <span className="rounded bg-blue-500/20 px-2 py-1 text-sm">{tab.count}</span>
                                        </button>
                                    ))}
                                </div>

                                {activeTab === 'assets' && (
                                    <div className="mt-6">
                                        <label className="mb-2 block text-sm font-medium text-gray-300">Filter by Asset</label>
                                        <select
                                            value={selectedAsset || ''}
                                            onChange={(e) => setSelectedAsset(e.target.value)}
                                            className="w-full rounded-lg border border-blue-800/30 bg-black/50 px-3 py-2 text-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                        >
                                            <option value="">All Assets</option>
                                            {assets.map((asset) => (
                                                <option key={asset.id} value={asset.id}>
                                                    {asset.nama_unit} ({asset.claim_id})
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Form Content */}
                        <div className="lg:col-span-3">
                            <div className="rounded-2xl border border-blue-800/50 bg-gradient-to-br from-blue-900/40 to-gray-900/40 p-8 shadow-2xl backdrop-blur-sm">
                                <div className="mb-8 flex items-center justify-between">
                                    <div>
                                        <h2 className="text-2xl font-bold">
                                            {activeTab === 'assets' && 'Asset Management'}
                                            {activeTab === 'components' && 'Component Inspection'}
                                            {activeTab === 'inspections' && 'Inspection Results'}
                                            {activeTab === 'photos' && 'Photo Documentation'}
                                        </h2>
                                        <p className="mt-1 text-gray-400">
                                            {activeTab === 'assets' && 'Manage assets affected by the inspection'}
                                            {activeTab === 'components' && 'Define components to be inspected'}
                                            {activeTab === 'inspections' && 'Record inspection findings and recommendations'}
                                            {activeTab === 'photos' && 'Upload and manage inspection photos'}
                                        </p>
                                    </div>

                                    {activeTab !== 'photos' && (
                                        <div className="flex items-center space-x-2">
                                            <span className="text-sm text-gray-400">Total:</span>
                                            <span className="text-lg font-bold text-blue-400">
                                                {activeTab === 'assets' && assets.length}
                                                {activeTab === 'components' && components.length}
                                                {activeTab === 'inspections' && inspections.length}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                <form onSubmit={handleSubmit}>
                                    {activeTab === 'assets' && (
                                        <div className="space-y-6">
                                            {/* Add New Asset */}
                                            <div className="rounded-xl border border-blue-800/30 bg-gradient-to-r from-blue-900/20 to-gray-900/20 p-6">
                                                <h3 className="mb-4 text-lg font-semibold">Add New Asset</h3>
                                                <div className="grid gap-4 md:grid-cols-2">
                                                    <div>
                                                        <label className="mb-2 block text-sm font-medium text-gray-300">Claim ID</label>
                                                        <input
                                                            type="text"
                                                            value={newAsset.claim_id}
                                                            onChange={(e) => setNewAsset({ ...newAsset, claim_id: e.target.value })}
                                                            className="w-full rounded-lg border border-blue-800/30 bg-black/50 px-4 py-3 placeholder-gray-500 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                                            placeholder="CL-2024-XXX"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="mb-2 block text-sm font-medium text-gray-300">Unit Name</label>
                                                        <input
                                                            type="text"
                                                            value={newAsset.nama_unit}
                                                            onChange={(e) => setNewAsset({ ...newAsset, nama_unit: e.target.value })}
                                                            className="w-full rounded-lg border border-blue-800/30 bg-black/50 px-4 py-3 placeholder-gray-500 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                                            placeholder="e.g., AC 1 PK, TV 42 inch"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="mb-2 block text-sm font-medium text-gray-300">Location</label>
                                                        <input
                                                            type="text"
                                                            value={newAsset.lokasi}
                                                            onChange={(e) => setNewAsset({ ...newAsset, lokasi: e.target.value })}
                                                            className="w-full rounded-lg border border-blue-800/30 bg-black/50 px-4 py-3 placeholder-gray-500 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                                            placeholder="e.g., Ruang Meeting Utama"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="mb-2 block text-sm font-medium text-gray-300">Description</label>
                                                        <input
                                                            type="text"
                                                            value={newAsset.deskripsi}
                                                            onChange={(e) => setNewAsset({ ...newAsset, deskripsi: e.target.value })}
                                                            className="w-full rounded-lg border border-blue-800/30 bg-black/50 px-4 py-3 placeholder-gray-500 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                                            placeholder="Problem description"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="mt-4">
                                                    <button
                                                        type="button"
                                                        onClick={handleAddAsset}
                                                        className="flex items-center space-x-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-2 font-semibold transition-all duration-300 hover:from-blue-700 hover:to-blue-900"
                                                    >
                                                        <Plus className="h-4 w-4" />
                                                        <span>Add Asset</span>
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Assets List */}
                                            <div>
                                                <h3 className="mb-4 text-lg font-semibold">Assets List</h3>
                                                <div className="space-y-3">
                                                    {assets.map((asset) => (
                                                        <div
                                                            key={asset.id}
                                                            className="flex items-center justify-between rounded-lg border border-blue-800/30 bg-black/50 p-4"
                                                        >
                                                            <div className="flex-1">
                                                                <div className="font-medium">{asset.nama_unit}</div>
                                                                <div className="text-sm text-gray-400">
                                                                    {asset.claim_id} • {asset.lokasi}
                                                                </div>
                                                                <div className="mt-1 text-sm text-gray-300">{asset.deskripsi}</div>
                                                            </div>
                                                            <button
                                                                onClick={() => removeAsset(asset.id)}
                                                                className="ml-4 text-red-400 hover:text-red-300"
                                                            >
                                                                <Trash2 className="h-5 w-5" />
                                                            </button>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'components' && (
                                        <div className="space-y-6">
                                            {/* Add New Component */}
                                            <div className="rounded-xl border border-blue-800/30 bg-gradient-to-r from-blue-900/20 to-gray-900/20 p-6">
                                                <h3 className="mb-4 text-lg font-semibold">Add New Component</h3>
                                                <div className="grid gap-4 md:grid-cols-2">
                                                    <div>
                                                        <label className="mb-2 block text-sm font-medium text-gray-300">Asset</label>
                                                        <select
                                                            value={newComponent.asset_id}
                                                            onChange={(e) => setNewComponent({ ...newComponent, asset_id: e.target.value })}
                                                            className="w-full rounded-lg border border-blue-800/30 bg-black/50 px-4 py-3 text-gray-300 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                                        >
                                                            <option value="">Select Asset</option>
                                                            {assets.map((asset) => (
                                                                <option key={asset.id} value={asset.id}>
                                                                    {asset.nama_unit} ({asset.claim_id})
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                    <div>
                                                        <label className="mb-2 block text-sm font-medium text-gray-300">Component Name</label>
                                                        <input
                                                            type="text"
                                                            value={newComponent.nama_komponen}
                                                            onChange={(e) => setNewComponent({ ...newComponent, nama_komponen: e.target.value })}
                                                            className="w-full rounded-lg border border-blue-800/30 bg-black/50 px-4 py-3 placeholder-gray-500 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                                            placeholder="e.g., Kompresor, PCB Main Board"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="mt-4">
                                                    <button
                                                        type="button"
                                                        onClick={handleAddComponent}
                                                        className="flex items-center space-x-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-2 font-semibold transition-all duration-300 hover:from-blue-700 hover:to-blue-900"
                                                    >
                                                        <Plus className="h-4 w-4" />
                                                        <span>Add Component</span>
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Components List */}
                                            <div>
                                                <h3 className="mb-4 text-lg font-semibold">Components List</h3>
                                                <div className="space-y-3">
                                                    {components.map((component) => {
                                                        const asset = assets.find((a) => a.id === component.asset_id);
                                                        return (
                                                            <div
                                                                key={component.id}
                                                                className="flex items-center justify-between rounded-lg border border-blue-800/30 bg-black/50 p-4"
                                                            >
                                                                <div className="flex-1">
                                                                    <div className="font-medium">{component.nama_komponen}</div>
                                                                    <div className="text-sm text-gray-400">
                                                                        {asset?.nama_unit || 'Unknown Asset'} • {asset?.claim_id || 'N/A'}
                                                                    </div>
                                                                </div>
                                                                <button
                                                                    onClick={() => removeComponent(component.id)}
                                                                    className="ml-4 text-red-400 hover:text-red-300"
                                                                >
                                                                    <Trash2 className="h-5 w-5" />
                                                                </button>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'inspections' && (
                                        <div className="space-y-6">
                                            {/* Add New Inspection */}
                                            <div className="rounded-xl border border-blue-800/30 bg-gradient-to-r from-blue-900/20 to-gray-900/20 p-6">
                                                <h3 className="mb-4 text-lg font-semibold">Add New Inspection</h3>
                                                <div className="grid gap-4 md:grid-cols-2">
                                                    <div>
                                                        <label className="mb-2 block text-sm font-medium text-gray-300">Component</label>
                                                        <select
                                                            value={newInspection.component_id}
                                                            onChange={(e) => setNewInspection({ ...newInspection, component_id: e.target.value })}
                                                            className="w-full rounded-lg border border-blue-800/30 bg-black/50 px-4 py-3 text-gray-300 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                                        >
                                                            <option value="">Select Component</option>
                                                            {components.map((component) => {
                                                                const asset = assets.find((a) => a.id === component.asset_id);
                                                                return (
                                                                    <option key={component.id} value={component.id}>
                                                                        {component.nama_komponen} ({asset?.nama_unit || 'Unknown'})
                                                                    </option>
                                                                );
                                                            })}
                                                        </select>
                                                    </div>
                                                    <div>
                                                        <label className="mb-2 block text-sm font-medium text-gray-300">Status</label>
                                                        <select
                                                            value={newInspection.status}
                                                            onChange={(e) => setNewInspection({ ...newInspection, status: e.target.value })}
                                                            className="w-full rounded-lg border border-blue-800/30 bg-black/50 px-4 py-3 text-gray-300 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                                        >
                                                            <option value="OK">OK</option>
                                                            <option value="NG">NG</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="mt-4 space-y-4">
                                                    <div>
                                                        <label className="mb-2 block text-sm font-medium text-gray-300">Analysis Result</label>
                                                        <textarea
                                                            value={newInspection.hasil_analisis}
                                                            onChange={(e) => setNewInspection({ ...newInspection, hasil_analisis: e.target.value })}
                                                            rows={3}
                                                            className="w-full resize-none rounded-lg border border-blue-800/30 bg-black/50 px-4 py-3 placeholder-gray-500 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                                            placeholder="Describe the analysis result..."
                                                        ></textarea>
                                                    </div>
                                                    <div>
                                                        <label className="mb-2 block text-sm font-medium text-gray-300">Possible Cause</label>
                                                        <input
                                                            type="text"
                                                            value={newInspection.kemungkinan_penyebab}
                                                            onChange={(e) =>
                                                                setNewInspection({ ...newInspection, kemungkinan_penyebab: e.target.value })
                                                            }
                                                            className="w-full rounded-lg border border-blue-800/30 bg-black/50 px-4 py-3 placeholder-gray-500 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                                            placeholder="Possible cause of the issue"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="mb-2 block text-sm font-medium text-gray-300">Recommended Solution</label>
                                                        <input
                                                            type="text"
                                                            value={newInspection.solusi_rekomendasi}
                                                            onChange={(e) =>
                                                                setNewInspection({ ...newInspection, solusi_rekomendasi: e.target.value })
                                                            }
                                                            className="w-full rounded-lg border border-blue-800/30 bg-black/50 px-4 py-3 placeholder-gray-500 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                                            placeholder="Recommended solution"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="mt-4">
                                                    <button
                                                        type="button"
                                                        onClick={handleAddInspection}
                                                        className="flex items-center space-x-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-2 font-semibold transition-all duration-300 hover:from-blue-700 hover:to-blue-900"
                                                    >
                                                        <Plus className="h-4 w-4" />
                                                        <span>Add Inspection</span>
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Inspections List */}
                                            <div>
                                                <h3 className="mb-4 text-lg font-semibold">Inspection Results</h3>
                                                <div className="space-y-3">
                                                    {inspections.map((inspection) => {
                                                        const component = components.find((c) => c.id === inspection.component_id);
                                                        const asset = component ? assets.find((a) => a.id === component.asset_id) : null;
                                                        return (
                                                            <div key={inspection.id} className="rounded-lg border border-blue-800/30 bg-black/50 p-4">
                                                                <div className="mb-3 flex items-start justify-between">
                                                                    <div>
                                                                        <div className="font-medium">
                                                                            {component?.nama_komponen || 'Unknown Component'}
                                                                        </div>
                                                                        <div className="text-sm text-gray-400">
                                                                            {asset?.nama_unit || 'Unknown Asset'} • {asset?.claim_id || 'N/A'}
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                                                                            inspection.status === 'OK'
                                                                                ? 'bg-green-500/20 text-green-400'
                                                                                : 'bg-red-500/20 text-red-400'
                                                                        }`}
                                                                    >
                                                                        {inspection.status}
                                                                    </div>
                                                                </div>
                                                                <div className="space-y-2 text-sm">
                                                                    <div>
                                                                        <span className="text-gray-400">Analysis: </span>
                                                                        <span className="text-gray-300">{inspection.hasil_analisis}</span>
                                                                    </div>
                                                                    <div>
                                                                        <span className="text-gray-400">Cause: </span>
                                                                        <span className="text-gray-300">{inspection.kemungkinan_penyebab}</span>
                                                                    </div>
                                                                    <div>
                                                                        <span className="text-gray-400">Solution: </span>
                                                                        <span className="text-gray-300">{inspection.solusi_rekomendasi}</span>
                                                                    </div>
                                                                </div>
                                                                <button
                                                                    onClick={() => removeInspection(inspection.id)}
                                                                    className="mt-3 flex items-center space-x-1 text-sm text-red-400 hover:text-red-300"
                                                                >
                                                                    <Trash2 className="h-4 w-4" />
                                                                    <span>Remove</span>
                                                                </button>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'photos' && (
                                        <div className="space-y-6">
                                            {/* Add New Photo */}
                                            <div className="rounded-xl border border-blue-800/30 bg-gradient-to-r from-blue-900/20 to-gray-900/20 p-6">
                                                <h3 className="mb-4 text-lg font-semibold">Add New Photo</h3>
                                                <div className="grid gap-4 md:grid-cols-2">
                                                    <div>
                                                        <label className="mb-2 block text-sm font-medium text-gray-300">Inspection</label>
                                                        <select
                                                            value={newPhoto.inspection_id}
                                                            onChange={(e) => setNewPhoto({ ...newPhoto, inspection_id: e.target.value })}
                                                            className="w-full rounded-lg border border-blue-800/30 bg-black/50 px-4 py-3 text-gray-300 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                                        >
                                                            <option value="">Select Inspection</option>
                                                            {inspections.map((inspection) => {
                                                                const component = components.find((c) => c.id === inspection.component_id);
                                                                const asset = component ? assets.find((a) => a.id === component.asset_id) : null;
                                                                return (
                                                                    <option key={inspection.id} value={inspection.id}>
                                                                        {component?.nama_komponen || 'Unknown'} - {asset?.nama_unit || 'Unknown'}
                                                                    </option>
                                                                );
                                                            })}
                                                        </select>
                                                    </div>
                                                    <div>
                                                        <label className="mb-2 block text-sm font-medium text-gray-300">Photo URL</label>
                                                        <input
                                                            type="text"
                                                            value={newPhoto.path_foto}
                                                            onChange={(e) => setNewPhoto({ ...newPhoto, path_foto: e.target.value })}
                                                            className="w-full rounded-lg border border-blue-800/30 bg-black/50 px-4 py-3 placeholder-gray-500 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                                            placeholder="https://example.com/photo.jpg"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="mt-4">
                                                    <div className="mb-2">
                                                        <label className="mb-2 block text-sm font-medium text-gray-300">Description</label>
                                                        <input
                                                            type="text"
                                                            value={newPhoto.keterangan}
                                                            onChange={(e) => setNewPhoto({ ...newPhoto, keterangan: e.target.value })}
                                                            className="w-full rounded-lg border border-blue-800/30 bg-black/50 px-4 py-3 placeholder-gray-500 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                                            placeholder="Photo description"
                                                        />
                                                    </div>
                                                    <button
                                                        type="button"
                                                        onClick={handleAddPhoto}
                                                        className="flex items-center space-x-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-2 font-semibold transition-all duration-300 hover:from-blue-700 hover:to-blue-900"
                                                    >
                                                        <Plus className="h-4 w-4" />
                                                        <span>Add Photo</span>
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Photos Grid */}
                                            <div>
                                                <h3 className="mb-4 text-lg font-semibold">Photo Documentation</h3>
                                                {photos.length === 0 ? (
                                                    <div className="rounded-lg border border-dashed border-blue-800/30 py-12 text-center">
                                                        <Image className="mx-auto mb-4 h-12 w-12 text-gray-600" />
                                                        <p className="text-gray-400">No photos added yet</p>
                                                    </div>
                                                ) : (
                                                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                                                        {photos.map((photo) => {
                                                            const inspection = inspections.find((i) => i.id === photo.inspection_id);
                                                            const component = inspection
                                                                ? components.find((c) => c.id === inspection.component_id)
                                                                : null;
                                                            const asset = component ? assets.find((a) => a.id === component.asset_id) : null;
                                                            return (
                                                                <div
                                                                    key={photo.id}
                                                                    className="overflow-hidden rounded-lg border border-blue-800/30 bg-black/50"
                                                                >
                                                                    <img
                                                                        src={photo.path_foto}
                                                                        alt={photo.keterangan}
                                                                        className="h-48 w-full object-cover"
                                                                    />
                                                                    <div className="p-4">
                                                                        <div className="mb-1 text-sm font-medium">
                                                                            {component?.nama_komponen || 'Unknown'}
                                                                        </div>
                                                                        <div className="mb-2 text-xs text-gray-400">
                                                                            {asset?.nama_unit || 'Unknown Asset'}
                                                                        </div>
                                                                        <p className="mb-3 text-xs text-gray-300">{photo.keterangan}</p>
                                                                        <button
                                                                            onClick={() => removePhoto(photo.id)}
                                                                            className="flex items-center space-x-1 text-xs text-red-400 hover:text-red-300"
                                                                        >
                                                                            <Trash2 className="h-3 w-3" />
                                                                            <span>Remove</span>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}

                                    {/* Form Actions */}
                                    <div className="flex items-center justify-between border-t border-blue-800/30 pt-8">
                                        <div className="flex space-x-3">
                                            <button
                                                type="button"
                                                className="rounded-lg border border-blue-600 px-6 py-3 font-semibold text-blue-400 transition-all duration-300 hover:border-blue-400 hover:bg-blue-900/20 hover:text-blue-300"
                                            >
                                                Save Draft
                                            </button>
                                            <button
                                                type="button"
                                                className="rounded-lg border border-gray-600 px-6 py-3 font-semibold text-gray-400 transition-all duration-300 hover:border-gray-400 hover:bg-gray-900/20 hover:text-gray-300"
                                            >
                                                Cancel
                                            </button>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="flex transform items-center justify-center space-x-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-blue-900 disabled:from-gray-600 disabled:to-gray-700"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                                                    <span>Submitting...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <Check className="h-5 w-5" />
                                                    <span>Submit All Data</span>
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="relative z-10 mt-20 border-t border-blue-800/30">
                <div className="mx-auto max-w-7xl px-6 py-8">
                    <div className="flex flex-col items-center justify-between md:flex-row">
                        <div className="mb-4 flex items-center space-x-2 md:mb-0">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-700">
                                <Shield className="h-5 w-5 text-white" />
                            </div>
                            <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-xl font-bold text-transparent">
                                INSPEKSI
                            </span>
                        </div>
                        <div className="text-sm text-gray-400">© 2024 Inspeksi. All rights reserved. Comprehensive Inspection System</div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
